const PARTS_ORDER_API_URL =
  "http://199.19.117.171:8080/flow_control/parts-orders";

//const PARTS_ORDER_API_URL = "http://localhost:8080/flow_control/parts-orders";

export const getPartsOrders = async () => {
  try {
    const response = await fetch(PARTS_ORDER_API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const createPartsOrder = async (newPartsOrder) => {
  console.log(newPartsOrder);
  try {
    const response = await fetch(`${PARTS_ORDER_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPartsOrder),
    });

    if (response.ok) {
      console.log(
        `Parts Order with ID: ${newPartsOrder.controlNumber} was created successfully!`
      );
    } else {
      console.error(
        `Error creating Parts Order with ID ${newPartsOrder.controlNumber}. Status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error creating data:", error.message);
  }
};

export const deletePartsOrder = async (id) => {
  try {
    const response = await fetch(`${PARTS_ORDER_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(`Parts Order with ID: ${id} was deleted successfully!`);
    } else {
      console.error(
        `Error deleting Parts Order with ID ${id}. Status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error deleting data:", error.message);
  }
};

export const updatePartsOrder = async (id, updatedPartsOrder) => {
  try {
    const { partsOrderCustomerId, ...rest } = updatedPartsOrder;
    const updatedData = { customerId: partsOrderCustomerId, ...rest };

    const response = await fetch(`${PARTS_ORDER_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    console.log("Updated Parts Order:", updatedPartsOrder);
    console.log("After Data Change:", updatedData);

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(`Parts Order with ID: ${id} was updated successfully!`);
      return jsonResponse;
    } else {
      console.error(
        `Error updating Parts Order with ID ${id}. Status: ${response.status}`
      );
      return null;
    }
  } catch (error) {
    console.error("Error updating data:", error.message);
    return null;
  }
};
