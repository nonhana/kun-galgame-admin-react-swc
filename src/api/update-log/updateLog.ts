import { fetchGet, fetchPost } from '@/utils/request'

export interface Todo {
  todoId: number
  status: number
  content: string
  language: string
  time: number
  completed_time: number
}

export interface UpdateLogRequestData {
  description: string
  language: Language
  time: string
  version: string
}

export type Language = 'en-us' | 'zh-cn'
export type GetTodosResponseData = KUNGalgameResponseData<Todo[]>
export type UpdateResponseData = KUNGalgameResponseData<null>

export const getTodosApi = async (
  page: number,
  limit: number
): Promise<GetTodosResponseData> => {
  const url = `/update/todo?page=${page}&limit=${limit}`
  const response = await fetchGet<GetTodosResponseData>(url)
  return response
}

export const createTodoApi = async (
  content: string,
  language: Language
): Promise<UpdateResponseData> => {
  const url = `/update/todo`
  const response = await fetchPost<UpdateResponseData>(url, {
    content,
    language,
  })
  return response
}

export const createUpdateLogApi = async (
  data: UpdateLogRequestData
): Promise<UpdateResponseData> => {
  const url = `/update/history`
  const response = await fetchPost<UpdateResponseData>(url, data)
  return response
}