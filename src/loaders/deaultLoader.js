import requireAuth from "../utils";

const defaultLoader = async ({ request }) => await requireAuth(request);
export { defaultLoader };
