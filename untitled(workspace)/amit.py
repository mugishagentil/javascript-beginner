def tellFortune(num_children, partner_name, location, job_title):
    fortune = f"You will be a {job_title} in {location}, and married to {partner_name} with {num_children} kids."
    print(fortune)

# Calling the function with different values
tellFortune(2, "Emma", "New York", "software engineer")
tellFortune(3, "Alex", "Paris", "teacher")
tellFortune(0, "Sophia", "London", "entrepreneur")
