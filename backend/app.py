def my_func(name):
    if name == "John":
        print("John has entered the building")
    else:
        print("It is not john but it is : ",name)

    for i in range(5):
        print(i, "seconds have passed")
    
my_func("John")