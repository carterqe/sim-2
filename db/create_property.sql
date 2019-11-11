INSERT INTO properties(name, address, city, state, zip, image_url, monthly_mortgage_amount, desired_monthly_rent)
VALUES
(${name}, ${address}, ${city}, ${state}, ${zip}, ${image_url}, ${monthly_mortgage_amount}, ${desired_monthly_rent});

SELECT * FROM properties;