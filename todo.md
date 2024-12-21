https://dribbble.com/shots/24344477-Doormat-Contact-Page






- Download zustand for state management(cart)
- 





# Payment Flow

- calc cart total 
- create order for products in cart with user.id
- navigate to pay#order?<id> and pay order.totalAmount with paystack
- Create Payment object with intent, payment_method, ref, 
- On pay success:
    - mark payment as success
    - # Notify sellers
    -  
- On payment failed:
    - mark payment as failed
    - # Notify admin and buyer
    - 