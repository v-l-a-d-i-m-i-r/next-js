import Layout from '../components/layout';
import Link from 'next/link';

const Home = (props) => (
  <Layout>
    <body id="page2">
      <div class="body-bg wrap">
        <header>
          <div class="container">
            <h1><Link href="/">Brewery</Link></h1>
            <div class="indent">
              <p><strong>Brewery</strong> is a free web template created by TemplateMonster.com team. This website template is optimized for 1024X768 screen resolution.</p>
              <p class="p0">This website template has several pages: 
              <Link href="/">Home</Link>,
              <Link href="/news">Fresh News</Link>,
              <Link href="/history">Our History</Link>,
              <Link href="/beer">Our Beer</Link>,
              <Link href="/contacts">Contacts</Link> (note that contact us form – doesn’t work),
              <Link href="/sitemap">Site Map</Link>.</p>
            </div>
          </div>
        </header>
      </div>
    </body>
  </Layout>
);

export default Home;