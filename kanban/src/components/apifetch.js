export async function fetchTickets() {
    const response = await fetch(
      "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
    );
    const data = await response.json();
    return data;
}