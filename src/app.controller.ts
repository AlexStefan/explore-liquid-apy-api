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

  @Get('lido')
  async getLidoApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.LIDO_CSV);
    return calcAverageApy(prices);
  }

  @Get('laine')
  async getLainApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.LAINE_CSV);
    return calcAverageApy(prices);
  }

  @Get('cogent')
  async getCogentApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.COGENT_CSV);
    return calcAverageApy(prices);
  }

  @Get('solblaze')
  async getSolBlazeApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.SOLBLAZE_CSV);
    return calcAverageApy(prices);
  }

  @Get('socean')
  async getSoceanApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.SOCEAN_CSV);
    return calcAverageApy(prices);
  }

  @Get('daopool')
  async getDaoPoolApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.DAOPOOL_CSV);
    return calcAverageApy(prices);
  }

  @Get('jpool')
  async getJPoolApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.JPOOL_CSV);
    return calcAverageApy(prices);
  }

  @Get('everstake')
  async getEverstakeApy(): Promise<any> {
    const prices = await fetchAndParsePricesCsv(DATA_SOURCE.EVERSTAKE_CSV);
    return calcAverageApy(prices);
  }
}
