export const ConsentType = Object.freeze({
  'privacy-policy': 'PRIVACY_POLICY',
  'terms-of-use': 'TERMS_OF_USE'
});

export type TConsentType = keyof typeof ConsentType;
