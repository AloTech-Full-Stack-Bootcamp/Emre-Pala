# CASE 1 Answer. 
import random 

def random_number_generator(n, l):
    try:
        random_numbers =set()  # we use set because we dont want to duplicate numbers

        while (len(random_numbers)<=n-1):
            x = random.randrange((10 ** (l - 1)), (10 ** (l)))  
            random_numbers.add(x)
        yield random_numbers
    except:
        print("You need to enter proper values (n and l can't be negative or zero)")
    
print(list(random_number_generator(5, 7)))

# CASE 2 Answer

def my_awesome_decorator(fun):
  def wrapped(*args):
    new_numbers = []
    for i in args:
        new_numbers.append(i+1)
    return not fun(*args)
  return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
    return all([True if number % 3 == 0 else False for number in numbers])

print(mod_batch(3,6,21))