class Cart < ApplicationRecord
    belongs_to :customer
    has_many :cart_items
    has_many :items, through: :cart_items


    def add_item(item, quantity = 1) # how item added to cart 
        current_item = cart_items.find_by(item_id: item.id)
        if current_item
          current_item.quantity += quantity
          current_item.save
        else 
          new_cart_item = cart_items.create!(item_id: item.id, quantity: quantity, price: item.price)
        end
    end

    def remove_item(item)
      cart_item = cart_items.find_by(item: item)
      return unless cart_item # if the item isn't in the cart, we simply return
  
      if cart_item.quantity > 1
        cart_item.quantity -= 1
        cart_item.save
      else
        cart_item.destroy
      end
    end
    
      # Loops thru and get total price in cart 
      def total_price
        cart_items.to_a.sum { |item| item.total_price }
      end


      # Loops thru and gets total quantity in cart 
      def total_quantity
        cart_items.to_a.sum { |item| item.quantity }
      end

end
 # checks to see if cart already has cartitem with the given item.id
        # if it does --> increm quantity of item by 1 
        # if does not, new CartItem is created 
        # if there is a current item, quantity ++
        # if not create new_cart_item