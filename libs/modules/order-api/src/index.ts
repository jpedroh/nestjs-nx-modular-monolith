export interface OrderApi {
  createOrder(userId: string, items: string[]): Promise<string>;
}

export const ORDER_API_INJECTION_TOKEN = Symbol('ORDER_API_INJECTION_TOKEN');
