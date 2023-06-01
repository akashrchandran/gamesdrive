# GamesDrive
**A React + TypeScript app build using Vite.**

GamesDrive is a video game discovery web app that assists you in finding new and intriguing games to play. With GamesDrive, you can explore games based on platform, genre, and other criteria, enhancing your gaming experience.

## Getting Started

To get started with GamesDrive, follow these steps:

1. Clone the GamesDrive repository to your local machine:
```bash
git clone <repository-url>
```
2. Navigate to the cloned repository directory:
```bash
cd GamesDrive
```
3. Install the required dependencies:
```bash
npm install
```
4. Obtain a RAWG API key at [https://rawg.io/apidocs](https://rawg.io/apidocs). You'll need to create an account first.
5. Open the file `src/services/api-helper.ts` and locate the section where the API key needs to be added. It should look similar to this:
```typescript
const apiKey = 'YOUR_API_KEY';
```
Replace `'YOUR_API_KEY'` with the API key you obtained from the RAWG website.
6. Save the changes to api-client.ts.
7. Start the web server:
```bash
npm run dev
```
8. The web server will be launched, and you can access GamesDrive by opening your browser and navigating to the specified URL.
