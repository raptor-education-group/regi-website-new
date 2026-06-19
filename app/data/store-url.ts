const storeBaseUrl =
  process.env.NEXT_PUBLIC_STORE_URL ?? "https://www.raptoreducationgroup.org";

export function getStoreUrl(pathname: string) {
  return new URL(pathname, storeBaseUrl).toString();
}
