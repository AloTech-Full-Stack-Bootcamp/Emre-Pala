## Generator Problems

### Soru 1

- Parametre olarak verilen l rakamdan (basamak sayısı) oluşan, yine parametre olarak verilen n adet rastgele sayı üreten bir generator yazalım. Daha önce üretilen bir sayının tekrar üretilmemesini bekliyoruz. Fonksiyonun signature'ı: random_number_generator(n, l=6)

### Soru 2

- Aşağıda tanımlı fonksiyonla birlikte kullanıldığında,
  a) aldığı tüm sayı parametrelerinin değerini 1 arttıracak,
  b) boolean dönüş değerini tersine çevirecek (True dönüyor ise False, False dönüyor ise True yapacak şekilde)
  bir decorator yazalım.

```Python
def my_awesome_decorator(fun):
  def wrapped(*args):
    return fun(*args)
  return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
  """Parametre olarak verilen tüm sayıların 3 ile tam bölünebilir olup olmadığını kontrol eder.

  >>> mod_batch(1, 2, 3)
  False
  >>> mod_batch(3, 9, 21)
  True
  """
  return all([True for number in numbers if number % 3 == 0])
```
