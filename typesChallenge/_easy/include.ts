type Includes<T extends any[],key> = {[K in T[number]]:true}[key] extends true ? true : false;
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Esidisi'> // expected to be `false`