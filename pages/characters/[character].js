import { useRouter } from 'next/router'

export default function character() {
    const router = useRouter()
    const { character } = router.query
    return <div>{character}</div>;
}
