import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';

const app_id = 1089; // Replace with your app_id or leave as 1089 for testing.

export const connection = new WebSocket(`wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`);

export const api = new DerivAPIBasic({ connection });
