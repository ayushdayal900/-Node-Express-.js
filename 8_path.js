const path = require('path');

console.log(path.sep); // Path separator
console.log(path.delimiter); // Path delimiter
console.log(path.dirname('/home/user/dir/file.txt')); // Directory name
console.log(path.basename('/home/user/dir/file.txt')); // Base name
console.log(path.extname('/home/user/dir/file.txt')); // File extension
console.log(path.parse('/home/user/dir/file.txt')); // Parse path
console.log(path.format({
    dir: '/home/user/dir',
    base: 'file.txt'
})); // Format path
console.log(path.isAbsolute('/home/user/dir/file.txt')); // Check if path is absolute
console.log(path.join('/home/user', 'dir', 'file.txt')); // Join paths
console.log(path.resolve('/home/user', 'dir', 'file.txt')); // Resolve path
console.log(path.relative('/home/user/dir', '/home/user/dir/file.txt')); // Relative path
console.log(path.normalize('/home/user/dir/../file.txt')); // Normalize path
console.log(path.win32.sep); // Windows path separator
console.log(path.posix.sep); // POSIX path separator
console.log(path.win32.join('C:', 'Users', 'user', 'file.txt')); // Windows join
console.log(path.posix.join('/home', 'user', 'dir', 'file.txt')); // POSIX join
console.log(path.win32.normalize('C:\\Users\\user\\..\\file.txt')); // Windows normalize
console.log(path.posix.normalize('/home/user/dir/../file.txt')); // POSIX normalize
console.log(path.win32.parse('C:\\Users\\user\\file.txt')); // Windows parse
console.log(path.posix.parse('/home/user/dir/file.txt')); // POSIX parse
console.log(path.win32.format({
    dir: 'C:\\Users\\user',
    base: 'file.txt'
})); // Windows format
console.log(path.posix.format({
    dir: '/home/user/dir',
    base: 'file.txt'
})); // POSIX format
console.log(path.win32.isAbsolute('C:\\Users\\user\\file.txt')); // Windows isAbsolute
console.log(path.posix.isAbsolute('/home/user/dir/file.txt')); // POSIX isAbsolute
console.log(path.win32.resolve('C:\\Users\\user', 'file.txt')); // Windows resolve
console.log(path.posix.resolve('/home/user', 'dir', 'file.txt')); // POS
// IX resolve
console.log(path.win32.relative('C:\\Users\\user\\dir', 'C:\\Users\\user\\dir\\file.txt')); // Windows relative
console.log(path.posix.relative('/home/user/dir', '/home/user/dir/file.txt')); // POSIX relative
console.log(path.win32.dirname('C:\\Users\\user\\dir\\file.txt')); // Windows dirname
console.log(path.posix.dirname('/home/user/dir/file.txt')); // POSIX dirname
console.log(path.win32.basename('C:\\Users\\user\\dir\\file.txt')); // Windows basename
console.log(path.posix.basename('/home/user/dir/file.txt')); // POSIX basename
console.log(path.win32.extname('C:\\Users\\user\\dir\\file.txt')); // Windows extname
console.log(path.posix.extname('/home/user/dir/file.txt')); // POSIX extname
console.log(path.win32.sep === path.posix.sep); // Check if Windows and POSIX separators are the same

