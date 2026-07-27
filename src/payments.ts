export interface PaymentField {
  label: string
  value: string
}

export interface PaymentItem {
  label: string
  value?: string
  note?: string
  unit?: string
  fields?: PaymentField[]
}

export interface PaymentSection {
  title: string
  headline?: [string, string]
  tagline?: string
  items: PaymentItem[]
}

export const PAYMENT_SECTIONS: PaymentSection[] = [
  {
    title: 'Mobile banking',
    headline: ['Taka works', 'too.'],
    tagline: 'bKash, Nagad, Rocket or straight to the bank — pick your lane.',
    items: [
      { label: 'bKash', value: '01700-000000', note: 'Send money — personal', unit: 'number' },
      { label: 'Nagad', value: '01800-000000', note: 'Send money — personal', unit: 'number' },
      { label: 'Rocket', value: '01900-000000', note: 'Send money — personal', unit: 'number' },
      {
        label: 'Bank',
        fields: [
          { label: 'Bank', value: 'Sample Bank PLC' },
          { label: 'Account name', value: 'Your Name' },
          { label: 'Account no', value: '0000 1111 2222 3333' },
          { label: 'Routing no', value: '000000000' },
          { label: 'Branch', value: 'Dhaka' },
        ],
      },
    ],
  },
  {
    title: 'Crypto',
    headline: ['No coffee?', 'Send fuel.'],
    tagline: 'Crypto lands in the same tank — copy an address or scan its code.',
    items: [
      { label: 'Binance Pay', value: '123456789', note: 'Pay ID', unit: 'Pay ID' },
      { label: 'USDT', value: 'TSaMPLEaddressDoNotSend1111111111', note: 'TRC20 network only' },
      { label: 'ETH', value: '0xSAMPLEaddress0000000000000000000000000000' },
    ],
  },
]
