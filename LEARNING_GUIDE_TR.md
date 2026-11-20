# Öğrenme rehberi — Diagnostic Alert Context V2

## Önce hangi kararlar senin?

1. **Priority-first:** aktif kritik uyarılar üstte olmalı.
2. **Red + green check:** tarihsel kritik ciddiyet kırmızı olarak kalır; çözüm durumu yeşil tikle ayrı gösterilir.
3. **History matters:** çözülmüş olay zaman çizelgesinden silinmez.
4. **Timeline before complex graphs:** önce olay sırası, sonra ihtiyaç olursa detaylı sinyal incelemesi.
5. **Grouped but not assumed causal:** potansiyel ilişkiler gösterilir, kesin neden iddiası yoktur.

## Dosyalar: ne nerede?

- `frontend/src/App.tsx`: React bileşenleri, iki ekran, butonlar ve UI davranışı.
- `frontend/src/data/demo.ts`: örnek senaryolar, kritik sıralama ve ilişki seçimi mantığı.
- `frontend/src/types.ts`: TypeScript veri tipleri.
- `frontend/src/styles/main.css`: otomotiv tarzı renkler, yerleşim ve responsive tasarım.
- `backend/server.js`: Node.js + Express API uç noktaları.
- `backend/data/`: örnek JSON verileri.
- `frontend/src/App.test.tsx`: kullanıcı etkileşimini test eden örnekler.

## Teknolojiyi nerede kullandık?

**JavaScript:** dizi sıralama, filtreleme ve zaman değerleri karşılaştırma (`sortAlerts`, `relatedAlerts`).

**TypeScript:** `DiagnosticAlert` ve `DiagnosticData` tipleriyle severity/status gibi alanları sınırlandırma.

**React:** `App`, `Timeline`, `SignalChart`, `Detail`, `ResolutionMark` bileşenleri.

**useState:** seçilen uyarıyı, ekranda Overview/Investigation seçimini ve demo çözülme durumunu saklama.

**useEffect / fetch:** `/api/diagnostics` yolundan örnek veri çekme; API yoksa yerel veriyle devam etme.

**Express:** örnek kayıtları JSON olarak arayüze sunma.

**Vitest / Testing Library:** öncelik sırası, çözülmüş olayın görünmesi ve iki ekran geçişi.

## Kendin yapabileceğin 5 alıştırma

1. `demo.ts` içindeki bir uyarının zamanını değiştir; timeline yerinin güncellendiğini gör.
2. `sortAlerts` mantığını incele; active critical neden ilk sırada?
3. `ResolutionMark` simgesindeki yazıyı değiştir; kırmızı ciddiyet simgesini koru.
4. `SignalChart` içindeki voltaj eğrisini hangi değerlerin çizdirdiğini bul.
5. Yeni bir senaryo ekle, ilgili testi çalıştır ve kısa bir commit yaz.

## Mülakatta dürüst ve güçlü anlatım

**Soru:** What's your personal contribution?

**Yanıt:** "I defined the user problem and interaction design: critical alerts first, but resolved critical events stay visible with a green check to preserve diagnostic history. I used AI-assisted code generation for an initial implementation and then studied, tested and refined the React/TypeScript code." (Son cümleyi yalnızca gerçekten yaptıysan kullan.)

**Soru:** Why two ordering systems?

**Yanıt:** "The alert list is sorted by operational priority, whereas the timeline is sorted chronologically. Mixing the two would hide what happened first."

**Soru:** Are the alerts causally related?

**Yanıt:** "Not necessarily. Temporal proximity only highlights events worth reviewing; the prototype doesn't infer a root cause."

## Hedef

Kodu baştan yazmak zorunda değilsin; ama `sortAlerts`, `useState`, `/api/diagnostics` ve olayların grafik üzerinde nasıl yerleştirildiğini kendi cümlelerinle açıklayabilmelisin.
