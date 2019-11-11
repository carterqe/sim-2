UPDATE properties
SET name = $1,
    address = $2,
    state = $3,
    city = $4,
    zip = $5,
    image_url = $6
    montly_mortgage_amount = $7,
    desired_monthly_rent = $8
WHERE id = $9;

SELECT * FROM properties
ORDER BY id;