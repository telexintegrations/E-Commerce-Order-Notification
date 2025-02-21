"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integrationSpecSettings = void 0;
exports.integrationSpecSettings = {
    data: {
        date: {
            created_at: "2025-02-21",
            updated_at: "2025-02-21",
        },
        descriptions: {
            app_description: "A telex integration that sends real-time notifications to a designated channel when a customer successfully completes a purchase on a React-based eCommerce website. It helps store owners and support teams stay updated on orders, ensuring a smooth fulfillment process.",
            app_logo: "https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png",
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
                label: "Enable Notifications",
                type: "checkbox",
                required: true,
                default: true,
                description: "You can disable it, if you don't want mails to be sent to the receiver.",
            },
            {
                label: "Sender Email",
                type: "text",
                required: true,
                default: "",
                description: "Email address to be used to send the mails. This is the email the receiver will see when a mail is sent to them. The email must be a gmail account as that is what is currently supported.",
            },
            {
                label: "Receiver Email",
                type: "text",
                required: true,
                default: "",
                description: "Email address to send notifications to. This is the email you want to receive the mails into.",
            },
            {
                label: "Email Subject",
                type: "text",
                required: true,
                default: "",
                description: "This is the Subject/Title of the Mail you want to be displayed to the user",
            },
            {
                label: "Email App Password",
                type: "text",
                required: true,
                default: "",
                description: "This is the Password of the email you want to use to send mails, or the App Password. You can create it here, https://myaccount.google.com/security",
            },
        ],
        target_url: "https://0n7zbnfc-3000.uks1.devtunnels.ms/webhook",
        tick_url: "https://0n7zbnfc-3000.uks1.devtunnels.ms/webhook",
        author: "Oyero Habibulah",
        version: "1.0.0",
        authorProfile: "https://github.com/oyerohabib/",
    },
};
//# sourceMappingURL=integrationSpec.js.map