//const CUSTOMER_API_URL = "http://199.19.117.171:8080/flow_control/customers";

//const CUSTOMER_API_URL = "http://localhost:8080/flow_control/customers";

const CUSTOMER_API_URL =
  "https://6553bbc05449cfda0f2f19c3.mockapi.io/customers";

export const getCustomers = async () => {
  try {
    const response = await fetch(CUSTOMER_API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const customers = await response.json();

    return customers;
  } catch (error) {
    console.error("Error fetching customer data:", error.message);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export const getCustomerById = async (customerId) => {
  try {
    const response = await fetch(`${CUSTOMER_API_URL}/${customerId}`);

    if (!response.ok) {
      throw new Error(
        `Error fetching customer data. Status: ${response.status}`
      );
    }

    const customerData = await response.json();
    return customerData;
  } catch (error) {
    console.error("Error fetching customer data:", error.message);
    throw error;
  }
};

export const createCustomer = async (newCustomer) => {
  try {
    console.log(newCustomer);
    const response = await fetch(CUSTOMER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    });

    console.log(
      `The Customer "${newCustomer.customerName}" was added successfully!`
    );
    return await response.json();
  } catch (error) {
    console.error("Error creating customer:", error.message);
  }
};

export const deleteCustomer = async (customerId) => {
  try {
    const response = await fetch(`${CUSTOMER_API_URL}/${customerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error deleting customer:", response.statusText);
    }
    console.log(`Customer with ID ${customerId} was successfully deleted!`);
    return response.ok;
  } catch (error) {
    console.error("Error deleting customer:", error.message);
    return false;
  }
};

export const updateCustomer = async (id, updatedCustomer) => {
  try {
    const response = await fetch(`${CUSTOMER_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCustomer),
    });
    console.log(`Customer with ID: ${id} was updated successfully!`);
    return await response.json();
  } catch (error) {
    console.error("Error updating customer:", error.message);
  }
};
