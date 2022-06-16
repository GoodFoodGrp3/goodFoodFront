export interface Orders {
    order_id: number,
    customer_id:{
      id:number
    },
    order_date: string,
    delivery_date:string,
    shipped_date: string,
    status:string,
    comments:string
  }
  