def unique_values(dictionary):
    seen_values = []
    for value in dictionary.values():
        if value not in seen_values:
            seen_values.append(value)
    return len(seen_values)
