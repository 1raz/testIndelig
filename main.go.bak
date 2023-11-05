#include <iostream>
#include <fstream>
#include <vector>

#pragma pack(push, 1)

// Структура заголовка BMP файла
struct BMPHeader {
    uint16_t signature;     // Сигнатура "BM"
    uint32_t fileSize;     // Размер файла
    uint32_t reserved;     // Зарезервировано (0)
    uint32_t dataOffset;   // Смещение до данных
    uint32_t headerSize;   // Размер заголовка изображения
    int32_t width;         // Ширина изображения
    int32_t height;        // Высота изображения
    uint16_t planes;       // Количество плоскостей (1)
    uint16_t bitDepth;     // Глубина цвета (1 бит)
    uint32_t compression;  // Сжатие (0 - без сжатия)
    uint32_t imageSize;    // Размер изображения
    int32_t ppmX;          // Горизонтальное разрешение (пикселей в метре)
    int32_t ppmY;          // Вертикальное разрешение (пикселей в метре)
    uint32_t colorUsed;    // Используемые цвета (0 - все)
    uint32_t colorImportant;  // Важные цвета (0 - все)
};

#pragma pack(pop)

int main() {
    std::ifstream is("input.bmp", std::ios::binary);

    if (!is.is_open()) {
        std::cerr << "Unable to open the input file." << std::endl;
        return 1;
    }

    BMPHeader bmpHeader;

    is.read(reinterpret_cast<char*>(&bmpHeader), sizeof(BMPHeader));

    if (bmpHeader.signature != 0x4D42) {
        std::cerr << "Not a valid BMP file." << std::endl;
        return 1;
    }

    // Обновление горизонтального и вертикального разрешения
    bmpHeader.ppmX = 3000; // Новое горизонтальное разрешение (пикселей в метре)
    bmpHeader.ppmY = 3000; // Новое вертикальное разрешение (пикселей в метре)

    // Открываем файл для записи
    std::ofstream os("output.bmp", std::ios::binary);

    // Записываем обновленный заголовок BMP
    os.write(reinterpret_cast<char*>(&bmpHeader), sizeof(BMPHeader));

    // Копируем оставшуюся часть файла (данные изображения)
    char buffer[1024];
    while (!is.eof()) {
        is.read(buffer, sizeof(buffer));
        os.write(buffer, is.gcount());
    }

    is.close();
    os.close();

    std::cout << "Updated BMP file saved as 'output.bmp'" << std::endl;

    return 0;
}
