import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { messages } from '../../shared/constants';

@Injectable()

export class UtilsService {
  constructor() {
  }

  get_messages() {
    return messages;
  }

  get_api_url() {
    return environment.api_url;
  }
}