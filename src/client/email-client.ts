export type SendPayload = {
  name: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
};

const url = 'https://2tze91la00.execute-api.ap-southeast-1.amazonaws.com/emailer';

class EmailClient {
  async send(payload: SendPayload) {
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return await fetch(url, options).then((response) => response.json());
  }
}

export default new EmailClient();
