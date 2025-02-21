export const integrationSpecSettings = {
  data: {
    date: {
      created_at: "2025-02-21",
      updated_at: "2025-02-21",
    },
    descriptions: {
      app_description:
        "A telex integration that sends real-time notifications to a designated channel when a customer successfully completes a purchase on a React-based eCommerce website. It helps store owners and support teams stay updated on orders, ensuring a smooth fulfillment process.",
      app_logo:
        "https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png",
      app_name: "E-Commerce Order Notification",
      app_url: "https://0n7zbnfc-3000.uks1.devtunnels.ms",
      background_color: "#000000",
    },
    integration_category: "E-commerce & Retail",
    integration_type: "output",
    is_active: true,
    output: [
      {
        label: "output_channel_1",
        value: true,
      },
      {
        label: "output_channel_2",
        value: false,
      },
    ],
    key_features: [
      "Listens for successful order events from the eCommerce website backend (Express.js)",
      "Extracts order details such as customer name, order items, total price, and order ID.",
      "Sends structured notifications via Slack and/or email.",
    ],
    permissions: {
      monitoring_user: {
        always_online: true,
        display_name: "Performance Monitor",
      },
    },
    settings: [
      {
        label: "interval",
        type: "text",
        required: true,
        default: "* * * * *",
      },
      {
        label: "Key",
        type: "text",
        required: true,
        default: "1234567890",
      },
      {
        label: "Do you want to continue",
        type: "checkbox",
        required: true,
        default: "Yes",
      },
      {
        label: "Provide Speed",
        type: "number",
        required: true,
        default: "1000",
      },
      {
        label: "Sensitivity Level",
        type: "dropdown",
        required: true,
        default: "Low",
        options: ["High", "Low"],
      },
      {
        label: "Alert Admin",
        type: "multi-checkbox",
        required: true,
        default: "Super-Admin",
        options: ["Super-Admin", "Admin", "Manager", "Developer"],
      },
    ],
    target_url: "https://0n7zbnfc-3000.uks1.devtunnels.ms/webhook",
    tick_url: "https://0n7zbnfc-3000.uks1.devtunnels.ms/webhook",
    author: "Oyero Habibulah",
    version: "1.0.0",
    authorProfile: "https://github.com/oyerohabib/",
  },
};
