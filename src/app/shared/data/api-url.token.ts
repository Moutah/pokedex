import { InjectionToken } from '@angular/core';
import { environment } from '@environment';

export const API_URL = new InjectionToken<string>('API_URL');

export const ApiUrlProvider = { provide: API_URL, useValue: environment.apiUrl };
