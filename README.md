# Automated Email Sequencer

Automated Email Sequencer is a MERN Stack web application that enables users to create and manage automated email sequences using a flowchart interface. The application utilizes **React Flow** for visualizing email sequences, **Agenda** for email scheduling, and **Nodemailer** for sending emails.

## Live Application

You can access the deployed application here:

[Deployed Application Link](https://automated-email-sequencer-1.onrender.com/)
## Features

- **Flowchart Interface**: An intuitive interface for creating and visualizing email sequences.
- **Node Types**:
  - **Lead-Source**: Defines the recipient of the email sequence.
  - **Cold-Email**: Represents an email to be sent with subject and content.
  - **Wait/Delay**: Adds a delay between emails.
- **Scheduling**: Automatically schedules and sends emails based on the flowchart.
- **Modal Forms**: Easy-to-use forms for adding and editing nodes.
- **Backend Integration**: Sends node and edge data to the backend to initiate the email sequence process.

## Technologies Used

### Frontend:
- React
- React Flow
- Axios
- Modal (react-modal)

### Backend:
- Node.js
- Express
- Agenda
- Nodemailer
- MongoDB (via Mongoose)

## Installation

### 1. Create `.env` Files
Create separate `.env` files for both the **frontend** and **backend** directories, and fill them as per the sample configuration in `.env.sample`.

### 2. Install Dependencies

#### Backend:
```bash
cd backend
npm install
npm run dev
```
### Frontend:
```bash
cd frontend
npm install
npm run dev
```
### Open the Application:
```bash
http://localhost:3000

