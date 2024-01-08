import unittest
import find_first_repeated

class TestFindFirstRepeated(unittest.TestCase):
    def test_find_first_repeated(self):
        self.assertEqual(find_first_repeated.findFirstRepeated([2, 1, 3, 5, 3, 2]), 3)
        self.assertEqual(find_first_repeated.findFirstRepeated([1, 2, 3, 4]), -1)
        self.assertEqual(find_first_repeated.findFirstRepeated([5, 1, 5, 1]), 5)
    def test_find_first_repeated_error(self):
        with self.assertRaises(TypeError):
            find_first_repeated.findFirstRepeated(123)
        with self.assertRaises(TypeError):
            find_first_repeated.findFirstRepeated('123')
        with self.assertRaises(TypeError):
            find_first_repeated.findFirstRepeated({1: 1, 2: 2, 3: 3})
    def test_find_first_repeated_error2(self):
        with self.assertRaises(TypeError):
            find_first_repeated.findFirstRepeated([1, 2, 3, '4'])
        with self.assertRaises(TypeError):
            find_first_repeated.findFirstRepeated([1, 2, 3, [4]])
        with self.assertRaises(TypeError):
            find_first_repeated.findFirstRepeated([1, 2, 3, {'4': 4}])

if __name__ == '__main__':
    unittest.main()
