# explore-liquid-apy-api

This simple api acts as a wrapper to retrieve APY for pools supported by [@glitchful-dev/sol-apy-sdk](https://www.npmjs.com/package/@glitchful-dev/sol-apy-sdk).

## Routes:
    - /marinade 
    - /lido
    - /jito
    - /laine
    - /cogent
    - /solblaze
    - /jpool
    - /daopool
    - /everstake
    - /socean

## Response:
```
{
	"apy":0.06883864676436158,
	"epochs":10,
	"timestampStart":1687559155000,
	"timestampEnd":1689488854000
}
```