# E-commerce Order Notification

## Project Overview

The E-commerce Order Notification project is a backend service built with Node.js and Express that sends real-time notifications via email when a customer successfully completes a purchase on a React-based eCommerce website. This integration helps store owners and support teams stay updated on orders, ensuring a smooth fulfillment process.

## Application Walkthrough

To get a better understanding of how the E-commerce Order Notification application works, please watch the following walkthrough video:

[![Watch the video](https://i.imgur.com/bVS6aXg.jpeg)](https://www.loom.com/share/37508e90208741eba67a6044f13f6402)

## Features

- Sends email notifications for successful order events.
- Configurable settings for email sender, receiver, and subject.
- Supports Gmail as the email service provider.
- Provides integration specifications for easy setup.

## Technologies Used

- Node.js
- Express.js
- Nodemailer
- TypeScript
- CORS

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Steps to Install

1. Clone the repository:

   ```bash
   git clone https://github.com/telexintegrations/E-Commerce-Order-Notification.git
   cd E-Commerce-Order-Notification
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. (Optional) If you want to use a different email service, modify the `nodemailer` transporter configuration in `src/app.ts`.

## Usage

### Running the Application

To start the application in development mode, use the following command:

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

### API Endpoints

#### 1. **GET /**

- **Description**: Welcome message.
- **Response**:
  ```json
  {
    "message": "Welcome to E-Commerce Order Notification Telex API"
  }
  ```

#### 2. **GET /integration-spec**

- **Description**: Returns the integration specifications.
- **Response**: Returns a JSON object containing integration settings and descriptions.

#### 3. **POST /webhook**

- **Description**: Receives order details and sends an email notification.
- **Request Body**:

  ```json
  {
    "message": "[{\"id\":1,\"name\":\"Product 1\",\"price\":100,\"quantity\":2},{\"id\":2,\"name\":\"Product 2\",\"price\":200,\"quantity\":1}]",
    "settings": [
      {
        "label": "Enable Notifications",
        "default": true
      },
      {
        "label": "Sender Email",
        "default": "your-email@gmail.com"
      },
      {
        "label": "Receiver Email",
        "default": "receiver-email@example.com"
      },
      {
        "label": "Email Subject",
        "default": "New Order Received"
      },
      {
        "label": "Email App Password",
        "default": "your-app-password"
      }
    ]
  }
  ```

- **Response**:
  - **Success**:
    ```json
    {
      "status": "success",
      "message": "Email sent successfully"
    }
    ```
  - **Error**:
    ```json
    {
      "status": "error",
      "message": "Error message here"
    }
    ```

## Configuration

The integration settings can be configured in the `src/integrationSpec.ts` file. You can modify the default values for the sender email, receiver email, email subject, and whether notifications are enabled.

## Troubleshooting

- Ensure that you have enabled "Less secure app access" in your Google account settings if you are using a regular password.
- If using App Passwords, ensure that you have generated one from your Google account.
- Check the console logs for any errors related to email sending.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an [issue](https://github.com/telexintegrations/E-Commerce-Order-Notification/issues) or submit a [pull request](https://github.com/telexintegrations/E-Commerce-Order-Notification/pulls).

## Support

If you encounter any issues or have questions about the application, please feel free to open an issue on the [GitHub repository]. Kindly give us a star, it motivates us to do more. We welcome contributions and feedback from the community!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **Oyero Habibulah** - Contact me [Github](https://github.com/oyerohabib/), [Linkedin](https://www.linkedin.com/in/oyerohabib/)
