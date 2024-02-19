React Uygulaması Oluşturma
Dökümantasyonunda da belirtildiği üzere React, baştan sona aşamalı olarak kullanılabilecek şekilde tasarlanmıştır. Bu demek oluyor ki ihtiyaca göre az ya da daha fazla kullanmak mümkün. Var olan bir HTML sayfasına React'i entegre edebileceğimiz gibi bazı araçları da içeren geliştirme ortamının hazırlanmasıyla birlikte yeni bir tek sayfa uygulama (Single Page Application) oluşturabiliriz. Bu yazıda create-react-app ile yeni bir React uygulaması oluşturmayı öğreneceğiz.

Giriş
Bir React uygulaması oluşturmak için bazı bağımlılık ve gereksinimlere ihtiyaç duyuyoruz. Bunların içerisinde hem modüler bileşenler oluşturmak için kullanılan zorunlu paketler (react, react-dom) hem de konfigürasyon dosyaları (webpack, babel) yer alıyor. Bunların hepsini ve daha fazlasını bizim için yapan bir araç olan create-react-app ile kolay ve hızlı bir şekilde bir React.js uygulaması oluşturmak mümkün. Bu araç React ekibi tarafından sunuluyor ve hem React öğrenmeye yeni başlayanlar hem de belirli ölçekte proje geliştirmek isteyenler için hazır bir iskelet yapı sağlıyor. Bu sayede Babel, webpack gibi bağımlılıkları manuel olarak konfigüre etmeye gerek kalmadan hızlıca bir React.js uygulaması geliştirmeye başlayabiliyoruz.

Hazırlık
create-react-app ile proje ortamını oluşturabilmek için bilgisayarımıza Node.js kurmamız gerekiyor. Node'un yüklü olup olmadığını kontrol etmek için terminalde node -v komutunu çalıştırabilirsiniz. Eğer Node yüklüyse bu kodu çalıştırdığınızda bir versiyon numara çıktısı görmeniz gerekir. Eğer yüklü değilse bu bağlantıdan indirip kurabilirsiniz.

Ayrıca geliştirme yapabilmek için bir kod editöre ihtiyacımız var. En çok kullanılan kod editörlerden biri olan Visual Studio Code'u ücretsiz olarak indirebilirsiniz.

Node.js'i bilgisayarımıza kurduktan sonra npm de otomatik olarak yüklenmiş oluyor. npm (node package manager) bir paket yöneticisi olup Node.js'ten ayrı bir projedir. Bu yüzden bilgisayarınızda Node.js kurulu olsa bile bir react projesi oluşturmadan önce terminalde npm install -g npm@latest komutunu çalıştırarak en güncel versiyonda olduğundan emin olabilirsiniz. (macOS ve Linux kullanıcıları bu komutu çalıştırırken hata almaları durumunda komutun başına sudo ekleyerek çalıştırabilirler)

Node.js kurulumunu yapıp, npm'in güncel versiyonda olduğunu kontrol ettikten sonra artık React.js uygulaması için hazır bir iskelet yapı oluşturmaya geçebiliriz. Komutu çalıştırmadan önce doğru klasör dizininde olduğumuzdan emin olmalıyız. Terminal aracılığı ile React uygulamasını oluşturmak istediğimiz dosya dizinine gitmemiz için bize gerekli olan başlıca terminal komutlarından bahsetmek gerekirse;

pwd komutu ile bulunduğumuz dizini görüntüleyebiliriz. (MacOS ve Linux için geçerli)
cd komutu ile uygulamanın oluşturulmasını istediğimiz klasöre gidebiliriz.
mkdir komutu ile yeni bir klasör oluşturabiliriz.
Ayrıca terminali/komut istemini ilk başlattığınızda;

Windows kullanıcıları: C:\Users\KullaniciAdi
MacOS kullanıcıları: /Users/KullaniciAdi
Linux kullanıcıları: /home/KullaniciAdi
klasör dizininde olduğumuzu unutmamalıyız.

Bu gibi kavramlara uzaksanız. Kendi işletim sisteminizde terminal komutlarıyla ilgili aramalar yapmanızı tavsiye ederiz.
Projeyi Oluşturma: create-react-app
Bir React projesi oluşturmanın en kolay yöntemlerinden biri olan create-react-app ile projemizi oluşturabiliriz.

npx create-react-app ilk-uygulama komutunu kullanarak bulunduğumuz klasör dizininde bir React.js uygulaması oluşturabiliriz. (Unutmayın eğer terminal içerisinde yerinizi değiştirmediyseniz yukarıda yazdığımız klasörün altında oluşacak.)

Not: Burada kullandığımız npx npm 5.2+ ile gelen bir paket çalıştırma aracıdır.

Burada ilk-uygulama, uygulamaya vermek istediğimiz isimdir. Bunun yerine istediğiniz uygulama ismini verebilirsiniz (büyük harf içermediği sürece).

React Uygulaması Oluşturma
Dökümantasyonunda da belirtildiği üzere React, baştan sona aşamalı olarak kullanılabilecek şekilde tasarlanmıştır. Bu demek oluyor ki ihtiyaca göre az ya da daha fazla kullanmak mümkün. Var olan bir HTML sayfasına React'i entegre edebileceğimiz gibi bazı araçları da içeren geliştirme ortamının hazırlanmasıyla birlikte yeni bir tek sayfa uygulama (Single Page Application) oluşturabiliriz. Bu yazıda create-react-app ile yeni bir React uygulaması oluşturmayı öğreneceğiz.

Giriş
Bir React uygulaması oluşturmak için bazı bağımlılık ve gereksinimlere ihtiyaç duyuyoruz. Bunların içerisinde hem modüler bileşenler oluşturmak için kullanılan zorunlu paketler (react, react-dom) hem de konfigürasyon dosyaları (webpack, babel) yer alıyor. Bunların hepsini ve daha fazlasını bizim için yapan bir araç olan create-react-app ile kolay ve hızlı bir şekilde bir React.js uygulaması oluşturmak mümkün. Bu araç React ekibi tarafından sunuluyor ve hem React öğrenmeye yeni başlayanlar hem de belirli ölçekte proje geliştirmek isteyenler için hazır bir iskelet yapı sağlıyor. Bu sayede Babel, webpack gibi bağımlılıkları manuel olarak konfigüre etmeye gerek kalmadan hızlıca bir React.js uygulaması geliştirmeye başlayabiliyoruz.

Hazırlık
create-react-app ile proje ortamını oluşturabilmek için bilgisayarımıza Node.js kurmamız gerekiyor. Node'un yüklü olup olmadığını kontrol etmek için terminalde node -v komutunu çalıştırabilirsiniz. Eğer Node yüklüyse bu kodu çalıştırdığınızda bir versiyon numara çıktısı görmeniz gerekir. Eğer yüklü değilse bu bağlantıdan indirip kurabilirsiniz.

Ayrıca geliştirme yapabilmek için bir kod editöre ihtiyacımız var. En çok kullanılan kod editörlerden biri olan Visual Studio Code'u ücretsiz olarak indirebilirsiniz.

Node.js'i bilgisayarımıza kurduktan sonra npm de otomatik olarak yüklenmiş oluyor. npm (node package manager) bir paket yöneticisi olup Node.js'ten ayrı bir projedir. Bu yüzden bilgisayarınızda Node.js kurulu olsa bile bir react projesi oluşturmadan önce terminalde npm install -g npm@latest komutunu çalıştırarak en güncel versiyonda olduğundan emin olabilirsiniz. (macOS ve Linux kullanıcıları bu komutu çalıştırırken hata almaları durumunda komutun başına sudo ekleyerek çalıştırabilirler)

Node.js kurulumunu yapıp, npm'in güncel versiyonda olduğunu kontrol ettikten sonra artık React.js uygulaması için hazır bir iskelet yapı oluşturmaya geçebiliriz. Komutu çalıştırmadan önce doğru klasör dizininde olduğumuzdan emin olmalıyız. Terminal aracılığı ile React uygulamasını oluşturmak istediğimiz dosya dizinine gitmemiz için bize gerekli olan başlıca terminal komutlarından bahsetmek gerekirse;

pwd komutu ile bulunduğumuz dizini görüntüleyebiliriz. (MacOS ve Linux için geçerli)
cd komutu ile uygulamanın oluşturulmasını istediğimiz klasöre gidebiliriz.
mkdir komutu ile yeni bir klasör oluşturabiliriz.
Ayrıca terminali/komut istemini ilk başlattığınızda;

Windows kullanıcıları: C:\Users\KullaniciAdi
MacOS kullanıcıları: /Users/KullaniciAdi
Linux kullanıcıları: /home/KullaniciAdi
klasör dizininde olduğumuzu unutmamalıyız.

Bu gibi kavramlara uzaksanız. Kendi işletim sisteminizde terminal komutlarıyla ilgili aramalar yapmanızı tavsiye ederiz.
Projeyi Oluşturma: create-react-app
Bir React projesi oluşturmanın en kolay yöntemlerinden biri olan create-react-app ile projemizi oluşturabiliriz.

npx create-react-app ilk-uygulama komutunu kullanarak bulunduğumuz klasör dizininde bir React.js uygulaması oluşturabiliriz. (Unutmayın eğer terminal içerisinde yerinizi değiştirmediyseniz yukarıda yazdığımız klasörün altında oluşacak.)

Not: Burada kullandığımız npx npm 5.2+ ile gelen bir paket çalıştırma aracıdır.

Burada ilk-uygulama, uygulamaya vermek istediğimiz isimdir. Bunun yerine istediğiniz uygulama ismini verebilirsiniz (büyük harf içermediği sürece).
