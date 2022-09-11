# ios-calculator
****HTML*****
# => en dışa container class'ı ile div verildi.
# =>container class'ının içine cacl class'ı oluşturuldu. 
# => cacl class'nın içerisine görüntünün geleceği şekilde goruntu class'ı ve calc-goruntu id'si oluşturuldu.
# => cacl class'nın içerisine butonların bulunduğu buttons class'ı oluşturuldu.
# =>buttons class'ının içerisine btn-Rakam ile 0-9 arasındaki rakamlar, btn-opr class'ı ile hesaplama da kullanılan operatörler oluşturuldu.


****CSS*****
# => * ile tüm ayarlar sıfırlandı.
# => body ile yazı tipi genel genişlik ve yükseklik ayarı display ayarı yapıldı. webkit ile hesap makinesi üzerinden kopyalama işlemi kapatıldı.
# => calc class'ı ile hesap makinesi yükseklik, genişlik, arkaplan rengi, yazı rengi, kenar ovalliği, iç genişlik ayarı ve display ayarı yapıldı.
# =>görüntünün izlendiği goruntu class'ında yükseklik ,genişlik, yazı konumu, iç genişlik, yazı boyutu ve display ayarı yapıldı.
# =>buttons class'ı ile display ayarı yapıldı.
# =>tüm tuşlara verilen btn class'ı ile display ayarı, arkaplan rengi, kenar ovalliği, yazı boyutu, yükseklik ve genişlik yarları yapıldı.
# =>btn-Rakam class'ı ile yazı rengi ve arkaplan rengi ayarı yapıldı.
# =>btn-opr class'ı ile arkaplan rengi ayarı yapıldı.
# =>calc-zero class'ı ile sıfır rakamının konumu yüksekliği ayarlandı.
# => btn:hover ile saydamlık 0.5 olarak ayarlandı.



*****JAVA SCRİPT******
# =>document.getElementById ile buton id'leri kullanılarak butonlar tanımlandı.
# =>displaVall görüntü değeri 0 verili.
# =>işlem değerleri atanacak  pendingVal değeri oluşturuldu.
# =>switch fonksiyonunda kullanılmak üzere boş array olarak evalStringArray oluşturuldu.
# =>calcNumBtns değişkeni ile btn-Rakam class'ı kullanılarak rakamlar atandı.
# => calcoperatorBtns değişkeni ile btn-opr class'ı kullanılarak operatorler atandı.
# =>updateDisplayVal değişkeninde clickObj fonksiyonu kullanılarak girilen rakamlar sayıya dönüştürüldü.
# =>performOperation değişkeninde clickObj fonksiyonu kullanılarak girilen operatörler ile switch case yöntemi kullanılarak işlemler yaptırıldı.
# =>for döngüleri içerisinde click ile rakamlar ve işlem seçildi.
# => onclick fonksiyonu kullanılarak AC tuşu ile ekranı silme, <= tuşu ile en son rakamı silme ve "." tuşu ile rakamlar arasına nokta koyma işlevi ayarlandı.
