export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Yazı stilleri ne demek?",
    answer: "Yazı stilleri, metni daha yaratıcı veya benzersiz göstermek için kullanılan dekoratif yazı biçimleridir."
  },
  {
    question: "Yazı stili oluşturucular nasıl çalışır?",
    answer: "Normal harfleri dekoratif görünen Unicode karakterlerine dönüştürürler."
  },
  {
    question: "Yazı stilleri Instagram’da kullanılabilir mi?",
    answer: "Evet. Yazı stilleri Instagram bio, açıklama, yorum ve kullanıcı adlarında kullanılabilir."
  },
  {
    question: "Yazı stilleri Türkçe karakterleri destekler mi?",
    answer: "Bazı araçlar ğ, ü, ş, ö ve ç gibi Türkçe harfleri destekler, ancak her araç doğru şekilde çalışmayabilir."
  },
  {
    question: "İnsanlar neden stil sahibi yazı kullanır?",
    answer: "İnsanlar kullanıcı adlarını, bio’larını ve mesajlarını daha yaratıcı ve dikkat çekici yapmak için stil sahibi yazı kullanır."
  }
];

