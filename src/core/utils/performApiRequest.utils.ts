import axios, { AxiosError } from 'axios';
import { ApiResponse } from '../types';
import { AxiosService } from '@/config/axios';

export type ApiMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type StatusTypeResponse = 'success' | 'error';

interface Args {
	path: string;
	method: ApiMethod;
	data?: unknown;
	signal?: AbortSignal;
	errorMessage: string;
}

/**
 * Realiza una llamada HTTP real utilizando un servicio Axios genérico.
 *
 * - Ejecuta una solicitud según los parámetros proporcionados en `args`.
 * - Si la solicitud tiene éxito (`status === success`), transforma los datos de `snake_case` a `camelCase` y los devuelve.
 * - Si la solicitud falla o es cancelada, devuelve un objeto de error con mensaje apropiado.
 *
 * @template T - Tipo de los datos esperados en la respuesta.
 * @param {Args} args - Objeto con los argumentos necesarios para realizar la solicitud HTTP.
 * @param {string} args.path - Ruta específica del recurso.
 * @param {'get' | 'post' | 'put' | 'delete'} args.method - Método HTTP a usar ApiVerbsEnum.
 * @param {any} [args.data] - Datos a enviar en el cuerpo de la solicitud (si aplica).
 * @param {AbortSignal} [args.signal] - Señal para cancelar la solicitud si es necesario.
 * @param {string} [args.errorMessage] - Mensaje de error personalizado a mostrar si ocurre un error genérico.
 * @returns {Promise<IResponseApi<T>>} Promesa que resuelve con una respuesta estructurada o un error.
 */
export const performApiRequest = async <T>(args: Args): Promise<ApiResponse<T>> => {
	const { path, method, data, signal, errorMessage } = args;
	try {
		const res = await AxiosService[method]({
			path: path,
			data: data || undefined,
			signal: signal,
		});

		if (res.status !== "success") {
			throw new Error(res.message);
		}

		return res;
    
	} catch (error) {
		if (axios.isCancel(error)) {
			return {
				data: null,
				message: 'Solicitud cancelada',
				status: "error",
			};
		}

		return {
			data: null,
			message: error instanceof AxiosError ? error.response?.data.message : error instanceof Error ? error.message : errorMessage,
			status: "error",
		};
	}
};
