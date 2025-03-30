     import Navbar from '../components/Navbar'

     export default function RootLayout({ children }) {
       return (
         <html lang="zh">
           <body>
             <Navbar />
             <main>
               {children}
             </main>
           </body>
         </html>
       )
     } 