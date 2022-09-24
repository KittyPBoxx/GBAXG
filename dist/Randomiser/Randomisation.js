function mapWwaps() {
    let usableEmeraldWarps = Object.keys(EMERALD_WARPS).filter(k => !EMERALD_WARPS[k].ignore).filter(k => (EMERALD_WARPS[k].grouped && !EMERALD_WARPS[k].groupMain) || !EMERALD_WARPS[k].grouped);
    let usableFireRedWarps = Object.keys(FIRE_RED_WARPS).filter(k => !FIRE_RED_WARPS[k].ignore).filter(k => (FIRE_RED_WARPS[k].grouped && !FIRE_RED_WARPS[k].groupMain) || !FIRE_RED_WARPS[k].grouped);
    let usableCrystalWarps = Object.keys(CRYSTAL_WARPS).filter(k => !CRYSTAL_WARPS[k].ignore).filter(k => (CRYSTAL_WARPS[k].grouped && !CRYSTAL_WARPS[k].groupMain) || !CRYSTAL_WARPS[k].grouped);
}