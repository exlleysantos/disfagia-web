import React from 'react';

import { AuthProvider } from './Auth';

const CombineProviders = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export { CombineProviders };
