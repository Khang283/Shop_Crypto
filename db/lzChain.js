const LZ_CHAINS = {
    goerli: {
        chainId: 10121,
        endpoint: "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23",
    },
    bnb: {
        chainId: 10102,
        endpoint: "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1",
    },
    fuji: {
        chainId: 10106,
        endpoint: "0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706",
    },
    aptos: {
        chainId: 10108,
        endpoint:
            "0x1759cc0d3161f1eb79f65847d4feb9d1f74fb79014698a23b16b28b9cd4c37e3",
    },
    mumbai: {
        chainId: 10109,
        endpoint: "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8",
    },
    fantom: {
        chainId: 10112,
        endpoint: "0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf",
    },
    arbitrum_goerli: {
        chainId: 10143,
        endpoint: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
    },
    optimism_goerli: {
        chainId: 10132,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    harmony: {
        chainId: 10133,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    moonbeam: {
        chainId: 10126,
        endpoint: " 0xb23b28012ee92E8dE39DEb57Af31722223034747",
    },
    celo: {
        chainId: 10125,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    dexalot: {
        chainId: 10118,
        endpoint: "0x6C7Ab2202C98C4227C5c46f1417D81144DA716Ff",
    },
    portal_fantasy: {
        chainId: 10128,
        endpoint: "0xd682ECF100f6F4284138AA925348633B0611Ae21",
    },
    klaytn: {
        chainId: 10150,
        endpoint: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
    },
    metis: {
        chainId: 10151,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    coredao: {
        chainId: 10153,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    gnosis: {
        chainId: 10145,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    zksync: {
        chainId: 10165,
        endpoint: "0x093D2CF57f764f09C3c2Ac58a42A2601B8C79281",
    },
    okx: {
        chainId: 10155,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    base: {
        chainId: 10160,
        endpoint: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
    },
    meter: {
        chainId: 10156,
        endpoint: "0x3De2f3D1Ac59F18159ebCB422322Cb209BA96aAD",
    },
    linea: {
        chainId: 10157,
        endpoint: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
    },
    dos: {
        chainId: 10162,
        endpoint: "0x45841dd1ca50265Da7614fC43A361e526c0e6160",
    },
    sepolia: {
        chainId: 10161,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    polygon_zkevm: {
        chainId: 10158,
        endpoint: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
    },
    scroll_sepolia: {
        chainId: 10214,
        endpoint: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3",
    },
    tenet: {
        chainId: 10173,
        endpoint: "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab",
    },
    canto: {
        chainId: 10159,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    kava: {
        chainId: 10172,
        endpoint: "0x8b14D287B4150Ff22Ac73DF8BE720e933f659abc",
    },
    orderly: {
        chainId: 10200,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    blockgen: {
        chainId: 10177,
        endpoint: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8",
    },
    meritcircle: {
        chainId: 10178,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    mantle: {
        chainId: 10181,
        endpoint: "0x2cA20802fd1Fd9649bA8Aa7E50F0C82b479f35fe",
    },
    hubble: {
        chainId: 10182,
        endpoint: "0x8b14D287B4150Ff22Ac73DF8BE720e933f659abc",
    },
    aavegotchi: {
        chainId: 10191,
        endpoint: "0xfeBE4c839EFA9f506C092a32fD0BB546B76A1d38",
    },
    loot: {
        chainId: 10197,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    telos: {
        chainId: 10199,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    zora: {
        chainId: 10195,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    tomo: {
        chainId: 10196,
        endpoint: "0xae92d5aD7583AD66E49A0c67BAd18F6ba52dDDc1",
    },
    opbnb: {
        chainId: 10202,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    shimmer: {
        chainId: 10203,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    aurora: {
        chainId: 10201,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    lif3: {
        chainId: 10205,
        endpoint: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8",
    },
    conflux: {
        chainId: 10211,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    horizen_eon: {
        chainId: 10215,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    xpla: {
        chainId: 10216,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    astar: {
        chainId: 10210,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    zkatana: {
        chainId: 10220,
        endpoint: "0x6098e96a28E02f27B1e6BD381f870F1C8Bd169d3",
    },
    manta: {
        chainId: 10221,
        endpoint: "0x55370E0fBB5f5b8dAeD978BA1c075a499eB107B8",
    },
    frame: {
        chainId: 10222,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
    public_goods_network: {
        chainId: 10223,
        endpoint: "0x83c73Da98cf733B03315aFa8758834b36a195b87",
    },
};

module.exports = LZ_CHAINS;
