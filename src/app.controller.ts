import { Controller, Get } from '@nestjs/common';
import {
  DATA_SOURCE,
  calcAverageApy,
  fetchAndParsePricesCsv,
} from '@glitchful-dev/sol-apy-sdk';

@Controller()
export class AppController {
  @Get('marinade')
  async getMarinadeApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.MARINADE_CSV);
    return calcAverageApy(prices);
  }

  @Get('jito')
  async getJitoApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.JITO_CSV);
    return calcAverageApy(prices);
  }
}
