import Link from "next/link"

export default function Meals() {
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                Nuestros Platos
            </h1>
            <h2 style={{ color: 'white', textAlign: 'center' }}>
                Deleita Tu Paladar!
            </h2>
            <h3 style={{ color: 'white', textAlign: 'center' }}>
                <Link href="/meals/menu-1">Aperitivos</Link>
            </h3>
            <h3 style={{ color: 'white', textAlign: 'center' }}>
                <Link href="/meals/menu-2">Surtidos</Link>
            </h3>
            <h3 style={{ color: 'white', textAlign: 'center' }}>
                <Link href="/meals/menu-3">Platos Principales</Link>
            </h3>

            <h3 style={{ color: 'white', textAlign: 'center' }}>
                <Link href="/meals/share">Comparte Tu Experiencia</Link>
            </h3>
        </main>
    )
}