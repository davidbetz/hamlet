/*
MIT License

Copyright(c) 2016-2017 David Betz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
#pragma once

#include <random>

namespace Hamlet {
	class Item {
		std::string _id;
		std::string _title;
		std::vector<std::string> _authors;
		int _pages;
		std::vector<std::string> _genre;
		std::string _summary;
		std::string _published;
		std::string _editor;

	public:
		std::string id() { return _id; }
		void id(std::string value) { _id = value; };

		std::string title() { return _title; }
		void title(std::string value) { _title = value; };

		std::vector<std::string> authors() { return _authors; }
		void authors(std::vector<std::string> value) { _authors = value; };

		int pages() { return _pages; }
		void pages(int value) { _pages = value; };

		std::vector<std::string> genre() { return _genre; }
		void genre(std::vector<std::string> value) { _genre = value; };

		std::string summary() { return _summary; }
		void summary(std::string value) { _summary = value; };

		std::string published() { return _published; }
		void published(std::string value) { _published = value; };

		std::string editor() { return _editor; }
		void editor(std::string value) { _editor = value; };
	};

	class ObjectGenerator {
		std::mt19937 engine;
		std::vector<std::string> data;

		std::string pad(int number);
		std::vector<std::string> createArray(int itemCount, int wordCount);

		Item createItem();
		int randInt(int min, int max);
		std::string hamlet(int count);

	public:
		ObjectGenerator();
		std::vector<Item> Run(int count);
	};
}