import styles from "./styles.module.css"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <main>
            {children}
        </main>
        </>
    
  )
}