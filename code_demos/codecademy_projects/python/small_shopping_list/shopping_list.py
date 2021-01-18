lovely_loveseat_description = 'Lovely Loveseat. Tufted polyester blend on wood. 32 inches high x 40 inches wide x 30 inches deep. Red or white.'

lovely_loveseat_price = 254.00

stylish_settee_description = 'Stylish Settee. Faux leather on birch. 29.50 inches high x 54.75 inches wide x 28 inches deep. Black.'

stylish_settee_price = 180.50

luxurious_lamp_description = 'Luxurious Lamp. Glass and iron. 36 inches tall. Brown with cream shade.'

luxurious_lamp_price = 52.15

# ensure sales tax is 8.8%
sales_tax = 0.88

customer_one_total = 0

customer_one_itemization = ''

# scenario: customer wishes to purchase lovely loveseat
# append customer total
customer_one_total += lovely_loveseat_price
# append customer itemization
customer_one_itemization += (lovely_loveseat_description + '\n')

# scenario continued: customer wishes to buy luxurious lamp
# append customer total
customer_one_total += luxurious_lamp_price
# append customer itemization
customer_one_itemization += (luxurious_lamp_description + '\n')

# customer_one checkout scenario
# declare customer_one sales tax
customer_one_tax = customer_one_total * sales_tax
# append customer total to now include tax
customer_one_total += customer_one_tax

# print customer_one receipt
# print itemization
print('Customer Items:')
print(customer_one_itemization)
# print customer total cost
print('Customer One Total:')
print(customer_one_total)
