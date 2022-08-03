export interface Comments {
    comment_id: number,
    customer_id:{
      id:number,
      lastname:string,
      firstname:string,
      phone:string,
      addressline1:string,
      addressline2:string,
      city:string,
      state:string,
      postal_code:string,
      country:string,
      email:string
    },
    is_actif: boolean,
    date:string,
    content: string
  }

  export interface UpdateComment {
    id: number,
    content: string
  }
  
  