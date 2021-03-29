# Quiz metadata

Có các loại quiz sau (hầu hết là clone từ iSpring Quiz Maker)

Các loại câu này đều có thể đi kèm ảnh / audio / video.

- MULTIPLE_CHOICE: Nhiều đáp án, 1 cái đúng.
- MULTIPLE_RESPONSE: Nhiều đáp án, nhiều cái đúng.
- SHORT_ANSWER: Câu trả lời ngắn, điền vào ô.
- LONG_ANSWER: Viết nguyên 1 câu / đoạn văn ngắn.
- FILL_IN_THE_BLANKS: Điền từ thích hợp vào nhiều ô trống trong câu.
- SELECT_FROM_LISTS: Cũng như trên nhưng thay vì tự điền, ta chọn trong menu xổ xuống.

Mỗi quiz sẽ có khuôn dạng json như sau:

```json
{
  "type": "MULTIPLE_CHOICE",
  "audio_link": "https://google.com",
  "image_link": "https://google.com",
  "asset_location": 6,
  "countdown": 90,
  "content": "彼女は、毎日_____アイスクリームがすきです。",
  "score": 5,
  "choices": [
    {
      "id": 0,
      "label": "{食(た)}べると"
    },
    {
      "id": 1,
      "label": "{食(た)}べ始める"
    },
    {
      "id": 2,
      "label": "{食(た)}べるほど"
    },
    {
      "id": 3,
      "label": "{食(た)}べるなら"
    }
  ]
}
```

- `type`: Một trong các loại quiz đã liệt kê ở trên.
- `countdown`: Thời hạn làm bài tính theo giây. 0 là không có thời hạn.
- `auto_audit`: Khi có cờ này thì các câu trả lời dù đúng sai sẽ được chấp nhận là được điểm (chỉ cần làm là được), sau đó giáo viên sẽ chấm bài.

Với loại quiz `MULTIPLE_CHOICE` thì phần cần điền sẽ thể hiện bằng 5 kí tự underscore (\_).
